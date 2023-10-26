import { createAction } from '@reduxjs/toolkit';

export const playAudio = createAction( 'check-playing/play' );
export const pauseAudio = createAction( 'check-playing/pause' );