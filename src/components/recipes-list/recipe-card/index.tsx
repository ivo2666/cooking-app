import { useState } from "react";
import { Recipe } from "../../../data-types";
import LinkSvg from "../../../svgs/link";
import RecepiIngr from "./recipe-ingredient";
import loadImage from "./image.png";
import Modal from "../placeholder-card/modal";
import CookingSteps from "./cooking-steps";

interface RecepiCardProps extends Recipe {}

const RecepiCard: React.FC<RecepiCardProps> = ({
  title,
  image,
  missedIngredients,
  usedIngredients,
  unusedIngredients,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isStepsOpen, setIsStepsOpen] = useState(false);
  const ingredients = [...missedIngredients, ...usedIngredients, ...unusedIngredients]
  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleOpen = () => {
    setIsStepsOpen(true);
  };
  const handleClose = () => {
    setIsStepsOpen(false);
  };

  return (
    <>
      <Modal show={isStepsOpen} onClose={handleClose}>
        <CookingSteps preparationMethod={[{step: 1, text: "sdfa"}]} />
      </Modal>
      <div
        className="relative flex flex-col items-start justify-between flex-grow-0 flex-shrink-0 overflow-hidden bg-white rounded cursor-pointer "
        onClick={handleOpen}
        style={{
          boxShadow:
            "0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px 0 rgba(0,0,0,0.12), 0px 1px 4px 0 rgba(0,0,0,0.2)",
        }}
      >
        <div>
          <div className="relative flex flex-col items-start self-stretch justify-start flex-grow-0 flex-shrink-0 gap-2 p-4 bg-white">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[262px] text-[26px] font-medium text-left text-black/[0.87]">
              {title}
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[262px] text-lg text-left text-black/60">
              {5}
            </p>
          </div>
          <div className="relative self-stretch flex-grow-0 flex-shrink-0 h-48">
            <img
              src={image}
              onLoad={handleLoad}
              alt="meal"
              className={`w-[294px] h-48 absolute left-[-0.5px] top-[-0.5px] object-cover ${
                isLoaded ? "visible" : "invisible"
              }`}
            />
            <img
              src={loadImage}
              // onLoad={handleLoad}
              alt="meal"
              className={`w-[294px] h-48 absolute left-[-0.5px] top-[-0.5px] object-cover ${
                !isLoaded ? "visible" : "invisible"
              }`}
            />
            <div className="w-[294px] h-48 absolute left-[-0.5px] top-[-0.5px]" />
          </div>
          <div className="flex flex-col items-start self-stretch justify-start flex-grow-0 flex-shrink-0 p-4 bg-white">
            <div className="flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
              {ingredients.map((ingr, index) => (
                <RecepiIngr ingredient={(ingr as {name: string}).name} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-start flex-grow-0 flex-shrink-0 w-[294px] relative gap-2 p-4 bg-white">
          <LinkSvg />
        </div>
      </div>
    </>
  );
};

export default RecepiCard;
