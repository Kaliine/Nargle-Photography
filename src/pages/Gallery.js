/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(24, 5vw);
  grid-gap: 2px; 
  padding-top: 160px;
`
const Image = styled.img`
width: 100%;
    height: 100%;
    object-fit: cover;
 /* width: auto;
  height: auto; */
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`
const Gallery_item1 = styled.figure`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 8;
`
const Gallery_item2 = styled.figure`
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 8;
`
const Gallery_item3 = styled.figure`
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 1;
  grid-row-end: 5;
`
const Gallery_item4 = styled.figure`
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 5;
  grid-row-end: 9;
`
const Gallery_item5 = styled.figure`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 8;
  grid-row-end: 13;
`
const Gallery_item6 = styled.figure`
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 9;
  grid-row-end: 17;
`
const Gallery_item7 = styled.figure`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 13;
  grid-row-end: 16;
`
const Gallery_item8 = styled.figure`
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row-start: 13;
  grid-row-end: 16;
`
const Gallery_item9 = styled.figure`
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 16;
  grid-row-end: 22;
`
const Gallery_item10 = styled.figure`
  grid-column-start: 7;
  grid-column-end: 11;
  grid-row-start: 17;
  grid-row-end: 22;
`

const Gallery = () => {
  return (
  <GalleryWrapper> 
  <Gallery_item1>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381843/Nargle/5206CBBB-D3B0-44C3-ABAA-D5C4DFAE92A4_oweh7m.jpg" />
  </Gallery_item1>
  <Gallery_item2>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381843/Nargle/2515F971-9596-4061-B02C-0BF1061CF153_vboeoi.jpg" />
  </Gallery_item2>
  <Gallery_item3>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381842/Nargle/69B92BB3-F5A4-48A6-8754-CD51C5A02BE2_szfdbm.jpg" />
  </Gallery_item3>
  <Gallery_item4>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381843/Nargle/79448C95-0AEF-40A0-82C2-54930D6D7262_zekdd0.jpg" />
  </Gallery_item4>
  <Gallery_item5>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381707/Nargle/A6C32870-F88B-4748-9935-DF64FE86BBF2_p4dr9e.jpg" />
  </Gallery_item5>
  <Gallery_item6>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381973/Nargle/IMG_3820_1_vyktyg.jpg" />
  </Gallery_item6>
  <Gallery_item7>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381843/Nargle/DF8E1E1D-77B1-4446-8E60-5F4562DCFC41_hj6joe.jpg" />
  </Gallery_item7>
  <Gallery_item8>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381842/Nargle/73A15ADB-248F-44D8-8C93-5CE2049BA70D_g3qedf.jpg" />
  </Gallery_item8>
  <Gallery_item9>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381973/Nargle/IMG_3817_ucej2g.jpg" />
  </Gallery_item9>
  <Gallery_item10>
    <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645381707/Nargle/4C7765A7-88D3-43AC-BF1E-CD664CA37A9B_h99kfp.jpg" />
  </Gallery_item10>
</GalleryWrapper>
  )
}

export { Gallery }