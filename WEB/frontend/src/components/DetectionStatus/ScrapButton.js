// import React from 'react';
import { useState } from 'react';
import { FiFilePlus, FiFileMinus } from 'react-icons/fi';
import { IconButton } from '@mui/material';

const ScrapButton = (props) => {
  const { handleScrap, isAlreadyScrapped } = props;
  const [isScrapped, setScrapped] = useState(false);
  const color = isScrapped || isAlreadyScrapped ? 'disabled' : 'primary';

  const handleClick = () => {
    if (isScrapped || isAlreadyScrapped) {
      return;
    }
    handleScrap();
    setScrapped(!isScrapped);
  };

  return (
    <IconButton onClick={handleClick}>
      {/* <SvgIcon color={color} viewBox="0 0 576 512">
        <path d="M 552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z" />
      </SvgIcon>
      <SvgIcon
        color={color}
        viewBox="0 0 512 512"
        sx={{
          backgroundColor: 'white',
          borderRadius: '100px',
          position: 'relative',
          width: '0.7em',
          top: '-0.5em',
          left: '-0.3em',
          height: '0.7em',
        }}
      >
        {isScrapped ? (
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
        ) : (
          <path d="M 256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
        )}
      </SvgIcon> */}
      {isScrapped ? (
        <FiFileMinus size={24} />
      ) : (
        <FiFilePlus color="#3a8ffb" size={24} />
      )}
    </IconButton>
  );
};

export default ScrapButton;
