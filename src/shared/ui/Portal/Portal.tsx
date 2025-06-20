import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  id: string;
}

const Portal = ({ children, id }: PortalProps) => {
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // 동일 아이디의 요소를 찾음
    let targetElement = document.getElementById(id);

    // 해당 아이디의 요소가 없다면 생성하여 body의 최하단 삽입
    if (!targetElement) {
      //
      const newNode = document.createElement("div");
      newNode.setAttribute("id", id);

      targetElement = document.body.appendChild(newNode);
    }

    setTargetNode(targetElement);

    return () => {
      if (targetElement?.parentNode) {
        targetElement.parentNode.removeChild(targetElement);
      }
    };
  }, [id]);

  if (!targetNode) return null;

  return createPortal(children, targetNode);
};

export default Portal;
