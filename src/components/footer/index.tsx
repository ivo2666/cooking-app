const Footer: React.FC = () => {
  return (
    <footer
      className="flex mt-8 flex-col justify-center items-center w-full relative gap-2 py-[42px] bg-white"
      style={{
        boxShadow:
          "0px 2px 2px 0 rgba(0,0,0,0.14), 0px 3px 1px 0 rgba(0,0,0,0.12), 0px 1px 5px 0 rgba(0,0,0,0.2)",
      }}
    >
     <div className="container px-4 sm:px-0">
     <p className="flex-grow-0 flex-shrink-0 text-lg text-center text-black/[0.87]">
        Please don’t try these recipes at home. We hope that they will inspire
        you to cook more, but consider that their main idea is my coding experience.
      </p>
     </div>
    </footer>
  );
};

export default Footer;
