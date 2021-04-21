import React from 'react';
import useImage, { ImageStatus } from '../useImage';
import './styles.css';

export const Avatar = ({
  src,
  initials,
  size = 96,
}: {
  src: string;
  initials: string;
  size?: number;
}) => {
  const [status] = useImage(src);

  return (
    <div className="avatar" style={{ width: size, height: size }}>
      {status === ImageStatus.Loading || status === ImageStatus.Failed ? (
        <div className="fallback">{initials}</div>
      ) : (
        <img src={src} />
      )}
    </div>
  );
};

export default Avatar;
