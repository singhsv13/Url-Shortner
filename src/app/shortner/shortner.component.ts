import { Component } from '@angular/core';
import * as ClipboardJS from 'clipboard';

@Component({
  selector: 'app-shortner',
  templateUrl: './shortner.component.html',
  styleUrls: ['./shortner.component.css']
})
export class ShortnerComponent {
  longUrl: string = '';
  shortUrl: string = '';

  constructor() {}

  // Mock service to shorten URLs
  shortenUrl() {
    if (this.longUrl) {
      // Generate a mock shortened URL
      const randomSuffix = Math.random().toString(36).substring(2, 8);
      this.shortUrl = `https://short.ly/${randomSuffix}`;
    }
  }

  // Copy to clipboard
  copyToClipboard() {
    const clipboard = new ClipboardJS('.btn', {
      text: () => this.shortUrl,
    });

    clipboard.on('success', () => {
      alert('Shortened URL copied to clipboard!');
      clipboard.destroy();
    });

    clipboard.on('error', () => {
      alert('Failed to copy. Please try again.');
      clipboard.destroy();
    });
  }
}
