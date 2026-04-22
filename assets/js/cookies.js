(function() {
  if (localStorage.getItem('cf_cookies_accepted')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div style="
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
      background: #0f0f0f; border-top: 1px solid rgba(184,154,90,0.25);
      padding: 1.2rem 2rem; display: flex; align-items: center;
      justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;
      font-family: 'DM Sans', sans-serif;
    ">
      <p style="margin:0; font-size:0.82rem; color:rgba(248,246,241,0.6); line-height:1.7; max-width:700px;">
        Usamos cookies propias y de terceros (Google AdSense, Analytics) para mejorar tu experiencia y mostrar publicidad relevante.
        <a href="/pages/privacy.html" style="color:#b89a5a; text-decoration:none; border-bottom:1px solid rgba(184,154,90,0.3);">Política de Privacidad</a> ·
        <a href="/pages/terms.html" style="color:#b89a5a; text-decoration:none; border-bottom:1px solid rgba(184,154,90,0.3);">Términos</a>
      </p>
      <div style="display:flex; gap:10px; flex-shrink:0;">
        <button onclick="
          localStorage.setItem('cf_cookies_accepted','all');
          document.getElementById('cookie-banner').remove();
        " style="
          font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.15em;
          text-transform:uppercase; padding:8px 20px; cursor:pointer;
          background:#b89a5a; border:1px solid #b89a5a; color:#0a0a0a;
          transition:opacity 0.2s;
        " onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">
          Aceptar
        </button>
        <button onclick="
          localStorage.setItem('cf_cookies_accepted','essential');
          document.getElementById('cookie-banner').remove();
        " style="
          font-family:'DM Mono',monospace; font-size:0.65rem; letter-spacing:0.15em;
          text-transform:uppercase; padding:8px 20px; cursor:pointer;
          background:transparent; border:1px solid rgba(184,154,90,0.3); color:rgba(248,246,241,0.5);
          transition:all 0.2s;
        " onmouseover="this.style.borderColor='rgba(184,154,90,0.7)'" onmouseout="this.style.borderColor='rgba(184,154,90,0.3)'">
          Solo esenciales
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
})();
