import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function ScrollNav(props) {
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  var bodyStyles;
  if (props.model === 'artists')
    bodyStyles = {borderRadius: '50%', textAlign: 'center'};
  else if (props.model === 'albums')
    bodyStyles = {borderRadius: '0%', textAlign: 'left'};
  else if (props.model === 'concerts')
    bodyStyles = {borderRadius: '15px 50px', textAlign: 'left'};
  else 
    bodyStyles = {borderRadius: '0%', textAlign: 'left'};

  return (
    <ScrollMenu>
      {props.items.map(( item ) => {
          return (
              <Cardd
                itemId={props.model+'-'+item.id} // NOTE: itemId is required for track items
                title={item.name}
                key={props.model+'-'+item.id}
                onClick={handleClick(props.model+'-'+item.id)}
                selected={isItemSelected(props.model+'-'+item.id)}
                item={item}
                label={'name'}
                bodyStyles={bodyStyles}
              />
          );
      })}
    </ScrollMenu>
  );
}

function Cardd({ onClick, selected, title, itemId, item, label, bodyStyles }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div className="scroll-nav" onClick={() => onClick(visibility)} tabIndex={0} style={{paddingLeft: "10%"}}>
      <Link to={`/${item}`}>
        <div className="scroll-nav-item"><span>{item}</span></div>
      </Link>
    </div>
  );
}

export default ScrollNav;