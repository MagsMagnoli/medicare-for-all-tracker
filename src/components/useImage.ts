import { useEffect, useState } from 'react';

export enum ImageStatus {
  Loading,
  Loaded,
  Failed,
}

const useImage = (src: string) => {
  const [status, setStatus] = useState(ImageStatus.Loading);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setStatus(ImageStatus.Loaded);
    img.onerror = () => setStatus(ImageStatus.Failed);
  }, [src]);

  return [status];
};

export default useImage;
