import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as ClipboardJS from 'clipboard';

@Component({
  selector: 'app-shortner',
  templateUrl: './shortner.component.html',
  styleUrls: ['./shortner.component.css']
})
export class ShortnerComponent {

  private bitlyAccessToken = '75db07097e37bd6d2eaece69ea4a1193c439e9f9'; 

  longUrl: string = '';
  shortUrl: string = '';

  constructor(private http: HttpClient) {}

  // Mock service to shorten URLs
  // shortenUrl() {
  //   if (this.longUrl) {
  //     // Generate a mock shortened URL
  //     const randomSuffix = Math.random().toString(36).substring(2, 8);
  //     this.shortUrl = `https://short.ly/${randomSuffix}`;
  //   }
  // }

  // Copy to clipboard
  // copyToClipboard() {
  //   const clipboard = new ClipboardJS('.btn', {
  //     text: () => this.shortUrl,
  //   });

  //   clipboard.on('success', () => {
  //     alert('Shortened URL copied to clipboard!');
  //     clipboard.destroy();
  //   });

  //   clipboard.on('error', () => {
  //     alert('Failed to copy. Please try again.');
  //     clipboard.destroy();
  //   });
  // }
  
  shortenUrl() {
    if (this.longUrl) {
      const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
      const headers = {
        Authorization: `Bearer ${this.bitlyAccessToken}`,
      };
      const body = {
        long_url: this.longUrl,
      };

      this.http.post(apiUrl, body, { headers }).subscribe(
        (response: any) => {
          this.shortUrl = response.link;
        },
        (error) => {
          console.error('Error shortening URL:', error);
          alert('Failed to shorten URL. Please try again.');
        }
      );
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.shortUrl).then(
      () => {
        alert('Shortened URL copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text:', err);
      }
    );
  }
}
