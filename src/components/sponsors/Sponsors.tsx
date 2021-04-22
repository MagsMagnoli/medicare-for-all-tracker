import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Chamber, CongressPerson } from '../../models/congressperson';
import { mergedStateNamesByStateKeys } from '../../models/state';
import Avatar from '../avatar/Avatar';
import SponsorBadge, { SponsorType } from '../sponsor-badge/SponsorBadge';
import './styles.css';

enum Filter {
  House,
  Senate,
  None,
}

const processString = (s: string) => s.replaceAll(' ', '').toLowerCase();

const Sponsors = ({ congressData }: { congressData: CongressPerson[] }) => {
  const [filteredData, setFilteredData] = useState(congressData);

  const houseMembers = congressData.filter(
    (item) => item.chamber === Chamber.House,
  );

  const yesSponsors = houseMembers.filter((item) => item.cosponsor).length;
  const noSponsors = houseMembers.filter((item) => !item.cosponsor).length;

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredData(
      congressData.filter((item) => {
        const name = processString(`${item.firstName}${item.lastName}`);
        const state = processString(mergedStateNamesByStateKeys[item.state]);
        const query = processString(e.target.value);
        return name.includes(query) || state.startsWith(query);
      }),
    );
  };

  const handleFilter = (filter: Filter) => () => {
    const data =
      filter === Filter.None
        ? congressData
        : congressData.filter(
            (item) =>
              item.chamber ===
              (filter === Filter.House ? Chamber.House : Chamber.Senate),
          );

    setFilteredData(data);
  };

  useEffect(handleFilter(Filter.House), [congressData]);

  return (
    <section className="section">
      <div className="container-xl">
        <div className="stats-container">
          <div
            className="stats"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <strong className="text-green">{yesSponsors}</strong>
            <FaCheckCircle className="text-green ml-4" />
            <strong className="text-red ml-8">{noSponsors}</strong>
            <FaTimesCircle className="text-red ml-4" />
          </div>
          <input
            style={{ padding: 8, width: 300 }}
            className="mt-4"
            type="text"
            placeholder="Search by name or state"
            onChange={handleSearchChange}
          />
        </div>
        <div className="avatar-container mt-8">
          {filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <a
                href={item.twitterURL ?? item.websiteURL}
                target="_blank"
                rel="noopener"
                style={{ color: 'inherit' }}
              >
                <div className="block-image">
                  <Avatar
                    src={`https://theunitedstates.io/images/congress/225x275/${item.id}.jpg`}
                    initials={`${item.firstName.slice(
                      0,
                      1,
                    )}${item.lastName.slice(0, 1)}`}
                  />
                  <SponsorBadge
                    sponsorType={
                      item.sponsor
                        ? SponsorType.Sponsor
                        : item.cosponsor
                        ? SponsorType.Cosponsor
                        : SponsorType.None
                    }
                  />
                </div>
              </a>
              <div className="member-info mt-2">
                <strong>{`${item.firstName} ${item.lastName}`}</strong>
                <div>{`${item.party}-${item.state}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
