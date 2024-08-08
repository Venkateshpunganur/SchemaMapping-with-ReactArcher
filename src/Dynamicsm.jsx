import React, { useState } from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';
import './Dynamicsm.css';

const App = () => {
  const leftColumnBoxes = [
    { name: 'source_system', type: 'text' },
    { name: 'Brand', type: 'varchar' },
    { name: 'source_system_id', type: 'integer' },
    { name: 'deluxe_pickup_date', type: 'text' },
    { name: 'customer_prospect_ind', type: 'varchar' },
    { name: 'business_name', type: 'text' },
    { name: 'phone', type: 'integer' },
    { name: 'cell', type: 'text' },
    { name: 'business_type', type: 'integer' },
    { name: 'lob_cd', type: 'text' },
    { name: 'sic', type: 'integer' },
    { name: 'naics_cd', type: 'text' },
  ];

  const rightColumnBoxes = [
    { name: 'cust_id', type: 'text' },
    { name: 'entity_type', type: 'varchar(100)' },
    { name: 'busin_dba', type: 'integer' },
    { name: 'busin_legal', type: 'varchar(100)' },
    { name: 'busin_alternative', type: 'array' },
    { name: 'busin_primary', type: 'varchar(100)' },
    { name: 'busin_secondary', type: 'varchar(100)' },
    { name: 'busin_mobile', type: 'text' },
    { name: 'source_system_2', type: 'text' },
    { name: 'source_system_3', type: 'text' },
    { name: 'source_system_4', type: 'text' },
    { name: 'source_system_5', type: 'text' },
  ];

  const getBoxType = (id) => {
    const index = parseInt(id.split('-')[2]) - 1;
    if (id.startsWith('left-box')) {
      return leftColumnBoxes[index].type;
    } else if (id.startsWith('right-box')) {
      return rightColumnBoxes[index].type;
    }
    return null;
  };

  const getArrowStyle = (type) => {
    return type === 'integer' ? '0,0' : '5,5';
  };

  const getColor = (type) => {
    return type === 'integer' ? 'blue' : 'green';
  };

  const [relations, setRelations] = useState([

  ]);

  const handleDragStart = (event, fromId) => {
    event.dataTransfer.setData('fromId', fromId);
  };

  const handleDrop = (event, toId) => {
    const fromId = event.dataTransfer.getData('fromId');
    const fromType = getBoxType(fromId);
    setRelations((prevRelations) => [
      ...prevRelations,
      { from: fromId, to: toId, color: getColor(fromType), arraystyle: getArrowStyle(fromType) },
    ]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSave = () => {
    alert('Relations saved:', relations);
    localStorage.setItem('relations', JSON.stringify(relations));
  };

  const handleDelete = (fromId, toId) => {
    setRelations((prevRelations) =>
      prevRelations.filter(
        (relation) => !(relation.from === fromId || relation.to === toId)
      )
    );
  };

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
                .filter((relation) => relation.from === `left-box-${index + 1}`)
                .map((relation) => ({
                  targetId: relation.to,
                  targetAnchor: 'left',
                  sourceAnchor: 'right',
                  style: { strokeDasharray: relation.arraystyle, strokeColor: relation.color, strokeWidth: 2 },
                }))}
            >
              <div
                className="box"
                draggable
                onDragStart={(event) => handleDragStart(event, `left-box-${index + 1}`)}
              >
                {box.name} <span>{box.type}</span>
              </div>
            </ArcherElement>
          ))}
        </div>
        <div className="column">
          <div className="column-title">Target</div>
          {rightColumnBoxes.map((box, index) => (
            <ArcherElement key={`right-box-${index + 1}`} id={`right-box-${index + 1}`}>
              <div
                className="box"
                onDrop={(event) => handleDrop(event, `right-box-${index + 1}`)}
                onDragOver={handleDragOver}
              >
                {box.name} <span>{box.type}</span>
                <button
                  onClick={() => handleDelete(`left-box-${index + 1}`, `right-box-${index + 1}`)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </div>
            </ArcherElement>
          ))}
        </div>
      </div>
      <button onClick={handleSave} className="save-button">
        Save
      </button>
    </ArcherContainer>
  );
};

export default App;
