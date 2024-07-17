declare module 'react-mic' {
    import { Component } from 'react';
  
    export interface ReactMicProps {
      record?: boolean;
      className?: string;
      onStop?: (recordedData: any) => void;
      onData?: (recordedData: any) => void;
      strokeColor?: string;
      backgroundColor?: string;
      mimeType?: string;
    }
  
    export class ReactMic extends Component<ReactMicProps> {}
  }
  