
import React from 'react';
import { TILModel } from '../../models/tils';
import TIL from '../til/TIL';


interface TILListProps {
  tils: TILModel[];
}

const TILList: React.FC<TILListProps> = ({ tils }) => (
  <div className="p-4 flex justify-center items-center flex-col z-20 mt-[470px] relative">
    {tils.map((til) => (
      <TIL til={til}/>
    ))}
  </div>
);

export default TILList;