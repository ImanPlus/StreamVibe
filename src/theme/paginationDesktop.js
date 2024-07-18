const customTheme = {
  pagination: {
    pages: {
      base: "inline-flex items-center -space-x-px bg-black_06 border border-black_12 p-3 rounded-xl",
      showIcon: "inline-flex",
      previous: {
        base: "bg-black_10 p-2 border border-black_12 rounded-md mr-3 cursor-pointer",
        icon: "text-white",
      },
      next: {
        base: "bg-black_10 p-2 border border-black_12 rounded-md ml-3 cursor-pointer",
        icon: "text-white",
      },
      selector: {
        base: "text-invisible leading-none w-8 rounded-3xl bg-black_20 pt-2 leading-tight enabled:hover:bg-red-400",
        active: "text-invisible bg-red_45 hover:bg-red-400",
        disabled: "cursor-not-allowed opacity-50",
      },
    },
  },
};

export default customTheme;
