import React from 'react';

export type IconButtonProps = {
  size?: number;
  color?: string;
  href: string;
  icon: JSX.Element;
};

const IconButton = ({
  href,
  icon,
  size = 24,
  color = 'green',
}: IconButtonProps) => {
  return (
    <a
      className={`${color}`}
      style={{
        display: 'grid',
        color: color,
        placeItems: 'center',
        fontSize: size,
        width: size + 20,
        height: size + 20,
      }}
      href={href}
      target="_blank"
      rel="noopener"
    >
      {icon}
    </a>
  );
};

export default IconButton;
