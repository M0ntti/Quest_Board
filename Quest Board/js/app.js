const main = document.querySelector("main");

main.addEventListener("click", async function (event) {
  const btn = event.target.closest(".addSubQuest");

  if (btn) {
    const { value: subName } = await Swal.fire({
      title: "Nova SubQuest",
      input: "text",
      inputPlaceholder: "O que precisa ser feito?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Cancelar",
    });

    if (subName) {
      const article = btn.closest("article");
      const list = article.querySelector(".listSubQuest");

      list.innerHTML += `
        <li>
          <label>
            <input type="checkbox" name="subQuest" />  
            ${subName}
          </label>
        </li>
      `;
    }
  }
});
const newButton = document.querySelector(".addQuest");

newButton.addEventListener("click", async function () {
  const { value: name } = await Swal.fire({
    title: "Nome da Quest",
    input: "text",
    inputPlaceholder: "Digite o nome aqui...",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonText: "Cancelar",
  });

  if (name) {
    const newQuest = document.createElement("article");

    newQuest.innerHTML = ` 
      <div class="headerQuest">
        <label>
          <input type="checkbox" name="titleQuest" />
          ${name}
        </label>
        <button class="addSubQuest" aria-label="Adicionar Nova Sub Quest">
          <span class="icon">+</span>
        </button>
      </div>
      <ul class="listSubQuest">
      </ul>
    `;
    main.appendChild(newQuest);
  }
});
