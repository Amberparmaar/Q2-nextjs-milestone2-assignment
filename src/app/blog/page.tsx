import React from "react";

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <div className="text-blue-300">
      <h1 className="text-red-500 font-serif text-center text-3xl">Blog</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod minima consequuntur qui sit hic consectetur itaque? Reiciendis esse quibusdam quidem quod obcaecati culpa quos at ex voluptatibus accusantium asperiores, earum maxime voluptates natus incidunt commodi vitae amet sapiente. Nobis nesciunt error excepturi inventore eos numquam, fugiat reprehenderit tempore debitis officiis, ipsum perferendis beatae tenetur corporis qui hic rem, nisi exercitationem dolorem facere fuga labore ipsam. Similique explicabo velit exercitationem laudantium veritatis voluptates error corporis inventore praesentium ut ipsam perferendis voluptatem quo non quos reprehenderit cupiditate in earum, aut deserunt architecto possimus! Animi officia, facere tenetur modi incidunt iure minima reiciendis fugit, soluta cumque unde amet vel dolores autem? Rerum praesentium quae magni quo vero ratione, non, quod deserunt quaerat repellat voluptatem omnis consequatur molestias ipsa. Fugit incidunt harum debitis numquam nam quasi officia necessitatibus sit dolorum in. Ullam expedita eligendi pariatur inventore iste commodi doloribus illum aspernatur libero optio rerum officia qui iusto, doloremque eaque reiciendis hic quo placeat aliquid assumenda ipsum velit. Amet, voluptates eveniet! Quibusdam, nam mollitia? Blanditiis, explicabo inventore. Et illum iure sint sunt sequi, libero error culpa dignissimos atque vel soluta provident. Dolore, ex. Sapiente, cum ullam eaque porro natus consectetur, quos distinctio tempore atque quaerat odit expedita in nisi amet. Optio, autem dolore minima numquam cum perferendis pariatur, vero nesciunt vitae dolor rem facere praesentium ullam! Deleniti mollitia neque totam voluptatem reiciendis sint recusandae inventore, illo iure odit maxime dolor dignissimos rem ea placeat quas expedita laborum! Consequuntur excepturi placeat facere cum deleniti illum voluptatibus, reiciendis, vero commodi voluptates aspernatur ad quisquam, laboriosam praesentium ducimus alias accusantium harum molestiae totam libero asperiores magnam maiores modi natus? Facilis explicabo ullam asperiores aliquam provident alias in eligendi, reiciendis optio nulla impedit et consequuntur deserunt autem corporis quam facere rerum fugit libero nemo tempore sequi aliquid! Officia blanditiis ipsam quis, sunt nihil facilis odit rerum saepe veniam, quisquam suscipit quidem soluta dicta nam fuga. Est veniam totam laudantium, dolor enim sequi quaerat facere pariatur qui cupiditate, eos rem porro eligendi distinctio consectetur nesciunt minus officiis esse eaque fuga debitis, placeat expedita obcaecati. Recusandae eum sapiente iste vel dolore.
      </p>
    </div>
  );
}
