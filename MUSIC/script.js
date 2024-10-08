
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

.player-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 800px;
}

.playlist, .music-library {
    width: 100%;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 5px 0;
}

button {
    margin: 5px;
}

.player-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

#progress-bar {
    width: 100%;
    margin: 10px 0;
}

#volume-control {
    width: 100px;
    margin: 10px 0;
}

@media (max-width: 600px) {
    .player-container {
        width: 100%;
        padding: 10px;
    }
}
