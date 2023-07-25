import React from 'react';

export default function Dia() {
  const date = new Date();
  return (
    <p className="Dia">
      {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
    </p>
  );
}
