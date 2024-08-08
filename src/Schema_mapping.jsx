import React from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';
import './Schema_mapping.css';

const App = () => {
  const leftColumnBoxes = [
    { name: 'source_system', type: 'text' },
    { name: 'Brand', type: 'varchar' },
    { name: 'source_system_id', type: 'integer' },
    { name: 'deluxe_pickup_date', type: 'text' },
    { name: 'customer_prospect_ind', type: 'varchar' },
    { name: 'business_name', type: 'text' },
    { name: 'phone', type: 'text' },
    { name: 'cell', type: 'text' },
    { name: 'business_type', type: 'text' },
    { name: 'lob_cd', type: 'text' },
    { name: 'sic', type: 'text' },
    { name: 'naics_cd', type: 'text' },
  ];

  const rightColumnBoxes = [
    { name: 'cust_id', type: 'text' },
    { name: 'entity_type', type: 'varchar(100)' },
    { name: 'business_name_dba', type: 'integer' },
    { name: 'business_name_legal_name', type: 'varchar(100)' },
    { name: 'business_name_alternative', type: 'array' },
    { name: 'business_phone_primary', type: 'varchar(100)' },
    { name: 'business_phone_secondary', type: 'varchar(100)' },
    { name: 'business_phone_mobile', type: 'text' },
    { name: 'source_system_2', type: 'text' },
    { name: 'source_system_3', type: 'text' },
    { name: 'source_system_4', type: 'text' },
    { name: 'source_system_5', type: 'text' },
  ];

  const relations = [
    { from: 'left-box-1', to: 'right-box-12', color: 'green', arraystyle : "0,0" },
    { from: 'left-box-2', to: 'right-box-11', color: 'orange', arraystyle : "5,5" },
    { from: 'left-box-3', to: 'right-box-10', color: 'green', arraystyle : "5,5" },
    { from: 'left-box-4', to: 'right-box-9', color: 'green', arraystyle : "0,0" },
    { from: 'left-box-5', to: 'right-box-8', color: 'orange', arraystyle : "5,5" },
    { from: 'left-box-6', to: 'right-box-7', color: 'green', arraystyle : "5,5" },
    { from: 'left-box-7', to: 'right-box-6', color: 'green' , arraystyle : "5,5"},
    { from: 'left-box-8', to: 'right-box-5', color: 'green', arraystyle : "0,0" },
    { from: 'left-box-9', to: 'right-box-4', color: 'green', arraystyle : "5,5" },
    { from: 'left-box-10', to: 'right-box-3', color: 'green' , arraystyle : "5,5"},
    { from: 'left-box-11', to: 'right-box-2', color: 'green', arraystyle : "5,5" },
    { from: 'left-box-12', to: 'right-box-1', color: 'green' , arraystyle : "0,0"},
  ];

  return (
    <ArcherContainer strokeColor="black">
      <div className="container">
        <div className="column">
          <div className="column-title">Source</div>
          {leftColumnBoxes.map((box, index) => (
            <ArcherElement
              key={`left-box-${index + 1}`}
              id={`left-box-${index + 1}`}
              relations={relations
                .filter(relation => relation.from === `left-box-${index + 1}`)
                .map(relation => ({
                  targetId: relation.to,
                  targetAnchor: 'left',
                  sourceAnchor: 'right',
                  style: {strokeDasharray: relation.arraystyle,  strokeColor: relation.color, strokeWidth: 2 },
                }))
              }
            >
              <div className="box">
                {box.name} <span>{box.type}</span>
              </div>
            </ArcherElement>
          ))}
        </div>
        <div className="column">
          <div className="column-title">Target</div>
          {rightColumnBoxes.map((box, index) => (
            <ArcherElement key={`right-box-${index + 1}`} id={`right-box-${index + 1}`}>
              <div className="box">
                {box.name} <span>{box.type}</span>
              </div>
            </ArcherElement>
          ))}
        </div>
      </div>
    </ArcherContainer>
  );
};

export default App;
