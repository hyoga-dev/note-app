export default function toPdf(){
  document.getElementById("download-pdf").style.opacity = "0.5";
  document.querySelector(".fa-file-arrow-down").style.opacity = "0.5";
  document.querySelector(".loader-fix").style.display = "inline-block";
  let unit = "in"
  let format = "a3"
  if (window.innerWidth >= 1550) {
    format = "a2"
  } if (window.innerWidth >= 2400) {
    format = "a1"
  }

  const element = document.getElementById('container');
  const opt = {
    margin:       1,
    filename:     'myfile.pdf',
    // pagebreak: { mode: 'avoid-all' },
    // image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: unit, format: format, orientation: 'landscape' }
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(element).save().then(()=> {
  document.getElementById("download-pdf").style.opacity = "1"
  document.querySelector(".fa-file-arrow-down").style.opacity = "1";
  document.querySelector(".loader-fix").style.display = "none";
  });
}