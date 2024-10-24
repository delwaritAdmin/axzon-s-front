 export function CrispChat() {
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
                window.$crisp=[];
                window.CRISP_WEBSITE_ID="0f0a695f-172a-4069-b5ea-6d0a8cc1ecc8";
                (function(){
                    d=document;
                    s=d.createElement("script");
                    s.src="https://client.crisp.chat/l.js";
                    s.async=1;
                    d.getElementsByTagName("head")[0].appendChild(s);
                })();
                `,
      }}
    />
  );
}
