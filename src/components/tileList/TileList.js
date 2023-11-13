import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = ({tiles}) => {
  const listContacts = tiles.map((list, index)=>{
    const {name, ...description} = list;
    return <Tile key={index} name={name} description={description}/>
  });
  return (
    <div>
      {listContacts}
    </div>
  );
};
