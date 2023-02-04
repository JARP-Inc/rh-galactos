from fastapi import FastAPI
import articlegenerator

app = FastAPI()


@app.get("/")
async def root():
    return articlegenerator.generate_response()
