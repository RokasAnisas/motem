import React from 'react';

const NewBoy = ({ label }: NewBoyProps) => {
  const className = 'new-boy';
  return <div>{label}</div>
}

interface NewBoyProps {
  label: string;
}
