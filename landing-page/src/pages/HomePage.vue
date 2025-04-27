<template>
    <div class="homepage">
      <div class="overlay">
        <img src="@/assets/logo.png" alt="Furia Logo" class="logo" />
        <h1>Torça com a FURIA, onde você estiver! 🔥</h1>
        <p>Entre no chat oficial e viva cada round com a nossa torcida.</p>
        <router-link to="/chat" class="enter-button">Entrar no Chat</router-link>
        <footer>Powered by FURIA.gg</footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  .homepage {
    background: url('@/assets/background-furia.jpg') no-repeat center center;
    background-size: cover;
    height: 100vh;
    position: relative;
  }
  
  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    width: 120px;
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin: 10px 0;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .enter-button {
    background-color: #f74a4b;
    padding: 12px 30px;
    color: white;
    border-radius: 30px;
    text-decoration: none;
    font-size: 1.1rem;
    transition: 0.3s;
  }
  
  .enter-button:hover {
    background-color: #d73b3c;
  }
  
  footer {
    position: absolute;
    bottom: 10px;
    font-size: 0.9rem;
    color: #cccccc;
  }
  </style>
  
  