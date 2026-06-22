/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type FrameStyle = 'Full Rim' | 'Rimless' | 'Half Rim';

export interface Frame {
  id: string;
  name: string;
  description: string;
  style: FrameStyle;
  price: number;
  imageUrl: string;
  material: string;
  colors: string[];
  gender: 'Unisex' | 'Men' | 'Women';
  dimensions: string; // e.g. "52-18-140"
}

export interface InquiryFormInput {
  name: string;
  email: string;
  message: string;
}
