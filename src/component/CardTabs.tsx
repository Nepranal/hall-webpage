import { useState, type ReactNode } from "react";

export type CardTabsProps = {
  cards: {
    header: string;
    detail: ReactNode;
  }[];
};

export default function CardTabs({ cards }: CardTabsProps) {
  let [activePageIndex, setActivePageIndex] = useState(0);
  return (
    <div>
      <ul></ul>
      {cards.map((card, i) => (
        <li
          onClick={() => {
            setActivePageIndex(i);
          }}
        >
          {card.header}
        </li>
      ))}
      {cards.map((card, i) => (i == activePageIndex ? card.detail : null))}
    </div>
  );
}
