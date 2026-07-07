<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kontakte | Uniklinikum Berlin-Ost</title>

<link rel="stylesheet" href="css/style.css">

<style>

.container{
    max-width:1200px;
    margin:120px auto;
    padding:20px;
}

.title{
    text-align:center;
    color:#005A9C;
    margin-bottom:40px;
}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:25px;
}

.card{
    background:white;
    padding:30px;
    border-radius:15px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    text-align:center;
}

.avatar{
    width:100px;
    height:100px;
    border-radius:50%;
    background:#e8eef8;
    margin:auto;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:45px;
}

h2{
    color:#005A9C;
}

p{
    color:#666;
    margin:10px 0;
}

.discord{
    display:inline-block;
    margin-top:20px;
    background:#5865F2;
    color:white;
    text-decoration:none;
    padding:12px 25px;
    border-radius:10px;
    transition:.3s;
}

.discord:hover{
    background:#4752C4;
}

</style>

</head>

<body>

<header>

<div class="logo">
<img src="logo.png" alt="Logo">
Uniklinikum Berlin-Ost
</div>

<nav>
<a href="index.html">Start</a>
<a href="bewertungen.html">Bewertungen</a>
<a href="kontakte.html">Kontakte</a>
</nav>

</header>

<div class="container">

<h1 class="title">
Unsere Ansprechpartner
</h1>

<div class="grid">

<div class="card">

<div class="avatar">
👨‍⚕️
</div>

<h2>Ärztliche Leitung</h2>

<p>DEIN_NAME</p>

<p>Discord: @DEIN_DISCORD</p>

<a class="discord"
href="https://discord.com/users/DEINE_USER_ID"
target="_blank">
Discord öffnen
</a>

</div>

<div class="card">

<div class="avatar">
👩‍⚕️
</div>

<h2>Verwaltung</h2>

<p>DEIN_NAME</p>

<p>Discord: @DEIN_DISCORD</p>

<a class="discord"
href="https://discord.com/users/DEINE_USER_ID"
target="_blank">
Discord öffnen
</a>

</div>

<div class="card">

<div class="avatar">
🛠️
</div>

<h2>Support</h2>

<p>DEIN_NAME</p>

<p>Discord: @DEIN_DISCORD</p>

<a class="discord"
href="https://discord.gg/DEIN_INVITE"
target="_blank">
Discord beitreten
</a>

</div>

</div>

</div>

</body>
</html>
