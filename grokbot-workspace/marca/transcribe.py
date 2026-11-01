import glob,os,datetime,subprocess,numpy as np
from faster_whisper import WhisperModel
m=WhisperModel("small",device="cpu",compute_type="int8")
meta={}
for l in open("referentes-audio/meta.txt"):
    p=l.rstrip("\n").split("|",5); meta[p[0]]=p
for f in sorted(glob.glob("referentes-audio/*/*.mp3")):
    r=f.split("/")[1]; vid=os.path.basename(f)[:-4]
    out=f"transcripciones/{r}/{vid}.txt"
    if os.path.exists(out): continue
    os.makedirs(os.path.dirname(out),exist_ok=True)
    p=meta.get(vid,[vid,"?","?","?","?","?"])
    d=p[3]; d=f"{d[:4]}-{d[4:6]}-{d[6:]}" if len(d)==8 else d
    a=np.frombuffer(subprocess.run(['ffmpeg','-nostdin','-i',f,'-f','s16le','-ac','1','-ar','16000','-'],capture_output=True).stdout,np.int16).astype(np.float32)/32768.0
    segs,info=m.transcribe(a,language=None,vad_filter=True)
    lines=[f"[{s.start:06.1f}-{s.end:06.1f}] {s.text.strip()}" for s in segs]
    cut=" (solo primeros 180 s transcritos)" if p[4].isdigit() and int(p[4])>180 else ""
    with open(out,"w") as o:
        o.write(f"URL: {p[1]}\nTitulo: {p[5]}\nVistas: {p[2]} (al 31-oct-2026)\nFecha: {d}\nDuracion: {p[4]} s{cut}\nIdioma detectado: {info.language}\n---\n"+"\n".join(lines)+"\n")
    print("ok",out,flush=True)
