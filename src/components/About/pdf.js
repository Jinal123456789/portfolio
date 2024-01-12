import React, { useState } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

function MyApp() {
  const [numPages, setNumPages] = useState(null);

  const { pdfDocument } = usePdf({
    file: './resume.pdf',
    onLoadSuccess: ({ numPages }) => setNumPages(numPages),
  });

  return (
    <div>
      {pdfDocument && (
        <>
          <p>
            Page 1 of {numPages}
          </p>
        </>
      )}
    </div>
  );
}

export default MyApp;
