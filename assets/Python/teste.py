from pytube import YouTube

# download da musica com Python
url = "https://www.youtube.com/watch?v=qHLX4nbPGrg"

youtube = YouTube(url)
print("\nIniciando...\nTítulo do Vídeo: " + youtube.title + "\n")
video = youtube.streams.get_highest_resolution()
video.download()