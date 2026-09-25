const info = new URLSearchParams(window.location.search);
const container = document.querySelector(".thankyou");
const fmt = (iso) => {
  const d = new Date(iso);
  return isNaN(d) ? "—" : d.toLocaleString();
};


export function thankyou() {
    if(!container)return;
    container.innerHTML = `
        <h2>${info.get("firstName")} ${info.get("lastName")}</h2>
        <div class="contact-details">
            <p><strong>Email : </strong> ${info.get("email")}</p>
            <p><strong>Mobile Number : </strong> ${info.get("mobilePhone")}</p>
            <p><strong>Business Name : </strong> ${info.get("businessName")}</p>
            <p><strong>Timestamp :</strong> ${fmt(info.get("timestamp"))}</p>
        </div>
    `;
}

// http://127.0.0.1:5501/wdd231/chamber/thankyou.html?firstName=Tadiwanashe&lastName=Dombe&orgTitle=The+Developers&email=dombes163%40gmail.com&mobilePhone=0985364227&businessName=The+Developers&level=bronze&description=this+is+te+best&timestamp=