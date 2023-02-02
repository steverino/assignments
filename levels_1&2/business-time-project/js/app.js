let homeBtn = document.querySelector("#home");
let pg1Btn = document.querySelector("#page1");
let contactBtn = document.querySelector("#contact");

pg1Btn.addEventListener("click", page1);

contactBtn.addEventListener("click", contact);

function page1() {
  let pg1 = `
  <div class="pages">
  <h2>Page 1</h2>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, impedit quos.
    Saepe cumque iure cum adipisci temporibus, velit nemo minus nobis dignissimos
    sit quos asperiores veniam ea error hic tempore. Nihil eligendi voluptatum est
    placeat voluptatem mollitia soluta ullam architecto incidunt. Nesciunt magnam
    eos dolores dolore, fugit possimus sunt eum obcaecati nobis esse repudiandae
    aliquid nisi accusantium id hic vel ipsum architecto incidunt odio, corrupti,
    laborum natus inventore amet? Expedita amet porro illo eaque asperiores
    dignissimos laboriosam. Repellat enim nam, dolore nulla blanditiis facilis a
    iste vel esse. Repellat pariatur fugiat deserunt obcaecati dolores commodi
    quidem. Fugiat modi tenetur tempora.
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugiat fugit?
    Explicabo animi ab id a iure repudiandae dicta ea accusantium corporis.
    Pariatur incidunt et perferendis eveniet eius debitis accusantium aut suscipit
    fugiat, omnis quisquam quam ad dolore quas reprehenderit eaque sint voluptatum
    iusto veritatis, laudantium at sunt qui. Ullam expedita facere aut repellat
    voluptas laboriosam sapiente, debitis temporibus quis necessitatibus quam quae
    voluptates dolorem ipsa hic, doloremque optio fuga odio earum! Officia est ad
    officiis error autem cum natus quam praesentium animi libero, eveniet quae
    veritatis at veniam, unde recusandae amet. Voluptatem eaque ab veritatis eius
    sed optio nesciunt.
    </p>
    </div>
    `;
  document.querySelector(".content").innerHTML = pg1;
}

function contact() {
  let contactPage = `
    <div class="pages">
  <h2>Contact Us</h2>
  <ul>
    <li>Email</li>
    <li>Phone</li>
    <li>Address</li>
  </ul>
</div>
`;
document.querySelector(".content").innerHTML = contactPage;
}
