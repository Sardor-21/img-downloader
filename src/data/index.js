"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const contentCard = document.getElementById("content-card");
  const cardData = [
    {
      img: "../../public/img/img1.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img2.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img3.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img4.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img5.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img6.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img7.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img8.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img9.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img10.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img11.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
    {
      img: "../../public/img/img12.jpg",
      title: "Curry",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, maiores.",
    },
  ];
  const setCard = () => {
    contentCard.innerHTML = "";
    cardData.map((v, i) => {
      let newElement = document.createElement("div");
      newElement.className = "p-5";
      newElement.innerHTML = `
        <div
          class="bg-white shadow-md rounded-md hover:shadow-lg overflow-hidden"
        >
          <img src="${v.img}"  class="w-full h-60 img object-cover" alt="curry" />
          <div class="p-5">
            <p class="m-0">${v.title}</p>
            <p>
              ${v.description}
            </p>

            <a
              href="${v.img}"
              class="
                w-full
                p-3
                rounded-md
                block
                bg-green-400
                text-center
                mt-4
                text-white
                transition-all
                hover:ring-4 hover:ring-green-500
                ring-opacity-50
                outline-none
              "
              download=""
            >
              Download
            </a>
          </div>
        </div>
        `;
      contentCard.appendChild(newElement);
    });
  };
  setCard();
  const img = document.querySelectorAll(".img");
  const modal = document.getElementById("modal"),
    modalContent = document.querySelector(".modal-content");
  const newElement = document.createElement("img"),
    newAtag = document.createElement("a");
  let modalHidden = true;
  let count = 0;
  let arrayImg = [];
  const modalImg = () => {
    let item = arrayImg[count];
    newElement.src = item;
    newElement.className = " lg:w-1/3 lg:h-80 object-cover sm:w-3/5 ";
    newAtag.href = item;
    newAtag.className =
      "top-5 right-24 w-16 h-16 text-white absolute border p-2";
    newAtag.innerHTML = `   <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>`;
    newAtag.download = item;
    modalContent.appendChild(newElement);
    modalContent.appendChild(newAtag);
  };
  const showModal = () => {
    modalImg();
    if (modalHidden) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    } else {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
    modalHidden = !modalHidden;
  };

  img.forEach((item, i) => {
    item.addEventListener("click", () => {
      showModal(i);
      count = i;
      for (let i = 0; i < cardData.length; i++) {
        arrayImg.push(cardData[i].img);
      }
      modalImg();
    });
  });
  const leftIcon = document.querySelector(".leftIcon"),
    rightIcon = document.querySelector(".rightIcon"),
    closeIcon = document.querySelector(".closeIcon");
  closeIcon.addEventListener("click", () => {
    showModal();
  });
  rightIcon.addEventListener("click", () => {
    if (count <= cardData.length) count = count + 1;
    if (count >= cardData.length) count = 0;
    modalImg();
  });
  leftIcon.addEventListener("click", () => {
    if (count <= cardData.length) count = count - 1;
    if (count <= -1) count = cardData.length - 1;
    modalImg();
  });
});
