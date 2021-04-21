import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { MdStars } from 'react-icons/md';
import './styles.css';

export enum SponsorType {
  Sponsor,
  Cosponsor,
  None,
}

const SponsorBadge = ({ sponsorType }: { sponsorType: SponsorType }) => {
  return (
    <div className="cosponsor-badge">
      <div className="cosponsor-badge-background" />
      {sponsorType === SponsorType.Sponsor ? (
        <MdStars color="gold" className="cosponsor-badge-icon" />
      ) : sponsorType === SponsorType.Cosponsor ? (
        <FaCheckCircle color="green" className="cosponsor-badge-icon" />
      ) : (
        <FaTimesCircle color="red" className="cosponsor-badge-icon" />
      )}
    </div>
  );
};

export default SponsorBadge;
