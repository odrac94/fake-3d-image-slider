document.addEventListener('DOMContentLoaded', (event) => {
  let slider = document.getElementById('slider');
  let currentImageIndex = 0;
  let slides = slider.getElementsByClassName('slide');
  let slideCount = slides.length;
  let startX, isDragging = false;
  let uploadedImage1 = null;
  let uploadedImage2 = null;

  const showImage = (index) => {
    slides[currentImageIndex].classList.remove('active');
    slides[index].classList.add('active');
    currentImageIndex = index;
  };

  const startDrag = (pageX) => {
    startX = pageX;
    isDragging = true;
  };

  const endDrag = () => {
    isDragging = false;
  };

  const doDrag = (movementX) => {
    if (Math.abs(movementX) >= 50) {
      let nextImageIndex = currentImageIndex + (movementX > 0 ? -1 : 1);
      nextImageIndex = (nextImageIndex + slideCount) % slideCount;
      showImage(nextImageIndex);
      startX = startX + movementX;
    }
  };

  // Mouse events
  slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startDrag(e.pageX);
  });

  document.addEventListener('mouseup', endDrag);

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      doDrag(e.pageX - startX);
    }
  });

  // Touch events
  slider.addEventListener('touchstart', (e) => {
    startDrag(e.touches[0].pageX);
  });

  document.addEventListener('touchend', endDrag);

  document.addEventListener('touchmove', (e) => {
    if (isDragging) {
      doDrag(e.touches[0].pageX - startX);
    }
  });

  // Inicializa mostrando la primera imagen
  showImage(0);

  // Handling image upload
  const loadImage = () => {
    for (let i = 1; i <= slideCount; i++) {
      let canvas = document.getElementById(`canvas${i}`);
      if (canvas) {
        let ctx = canvas.getContext('2d');
        let truckImage = new Image();
        truckImage.src = canvas.nextElementSibling.src;
        truckImage.onload = () => {
          // Escalar y dibujar la imagen del camión en el canvas
          canvas.width = 900;
          canvas.height = 600;
          ctx.drawImage(truckImage, 0, 0, canvas.width, canvas.height);

          if (uploadedImage1) {
            let overlayImage1 = new Image();
            overlayImage1.src = uploadedImage1;
            overlayImage1.onload = () => {
              let srcPoints1, dstPoints1;
              switch (i) {
                case 1:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 278, y: 23 }, { x: 789, y: 21 }, { x: 795, y: 447 }, { x: 281, y: 450 }];
                  break;
                case 2:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 214, y: 100 }, { x: 448, y: 7 }, { x: 452, y: 424 }, { x: 214, y: 420 }];
                  break;
                case 3:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
                  break;
                case 4:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 455, y: 7 }, { x: 688, y: 100 }, { x: 688, y: 419 }, { x: 451, y: 424 }];
                  break;
                case 5:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 123, y: 25 }, { x: 627, y: 28 }, { x: 623, y: 448 }, { x: 118, y: 445 }];
                  break;
                case 6:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 188, y: 89 }, { x: 417, y: 9 }, { x: 416, y: 453 }, { x: 189, y: 432 }];
                  break;
                case 7:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 482, y: 9 }, { x: 712, y: 89 }, { x: 710, y: 433 }, { x: 484, y: 452 }];
                  break;
                default:
                  srcPoints1 = [{ x: 0, y: 0 }, { x: overlayImage1.width, y: 0 }, { x: overlayImage1.width, y: overlayImage1.height }, { x: 0, y: overlayImage1.height }];
                  dstPoints1 = [{ x: 0, y: 0 }, { x: canvas.width, y: 0 }, { x: canvas.width, y: canvas.height }, { x: 0, y: canvas.height }];
              }

              drawTransformedImage(ctx, overlayImage1, srcPoints1, dstPoints1);
            };
          }

          if (uploadedImage2) {
            let overlayImage2 = new Image();
            overlayImage2.src = uploadedImage2;
            overlayImage2.onload = () => {
              let srcPoints2, dstPoints2;
              switch (i) {
                case 1:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
                  break;
                case 2:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 455, y: 7 }, { x: 686, y: 57 }, { x: 688, y: 420 }, { x: 458, y: 424 }];
                  break;
                case 3:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 268, y: 11 }, { x: 614, y: 8 }, { x: 614, y: 437 }, { x: 268, y: 439 }];
                  break;
                case 4:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 217, y: 57 }, { x: 448, y: 7 }, { x: 444, y: 424 }, { x: 215, y: 419 }];
                  break;
                case 5:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
                  break;
                case 6:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
                  break;
                case 7:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
                  break;
                default:
                  srcPoints2 = [{ x: 0, y: 0 }, { x: overlayImage2.width, y: 0 }, { x: overlayImage2.width, y: overlayImage2.height }, { x: 0, y: overlayImage2.height }];
                  dstPoints2 = [{ x: 0, y: 0 }, { x: canvas.width, y: 0 }, { x: canvas.width, y: canvas.height }, { x: 0, y: canvas.height }];
              }

              drawTransformedImage(ctx, overlayImage2, srcPoints2, dstPoints2);
            };
          }
        };
        canvas.style.display = 'block';
        canvas.nextElementSibling.style.display = 'none';
      }
    }
  };

  const drawTransformedImage = (ctx, image, srcPoints, dstPoints) => {
    const width = image.width;
    const height = image.height;
    const transformMatrix = getTransformMatrix(srcPoints, dstPoints);

    const offCanvas = document.createElement('canvas');
    const offCtx = offCanvas.getContext('2d');
    offCanvas.width = width;
    offCanvas.height = height;
    offCtx.drawImage(image, 0, 0);

    const overlayImageData = offCtx.getImageData(0, 0, width, height);
    const transformedOverlay = offCtx.createImageData(width, height);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const [newX, newY] = applyTransform(x, y, transformMatrix);
        if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
          const i = (y * width + x) * 4;
          const j = (Math.floor(newY) * width + Math.floor(newX)) * 4;
          transformedOverlay.data[j] = overlayImageData.data[i];
          transformedOverlay.data[j + 1] = overlayImageData.data[i + 1];
          transformedOverlay.data[j + 2] = overlayImageData.data[i + 2];
          transformedOverlay.data[j + 3] = overlayImageData.data[i + 3];
        }
      }
    }

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = ctx.canvas.width;
    tempCanvas.height = ctx.canvas.height;

    tempCtx.drawImage(ctx.canvas, 0, 0);
    tempCtx.putImageData(transformedOverlay, 0, 0);

    ctx.drawImage(tempCanvas, 0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  document.getElementById('imageUpload1').addEventListener('change', (event) => {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        uploadedImage1 = e.target.result;
        loadImage();
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('imageUpload2').addEventListener('change', (event) => {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        uploadedImage2 = e.target.result;
        loadImage();
      };
      reader.readAsDataURL(file);
    }
  });

  function getTransformMatrix(src, dst) {
    const A = [];
    for (let i = 0; i < 4; i++) {
      A.push([
        src[i].x, src[i].y, 1, 0, 0, 0, -src[i].x * dst[i].x, -src[i].y * dst[i].x
      ]);
      A.push([
        0, 0, 0, src[i].x, src[i].y, 1, -src[i].x * dst[i].y, -src[i].y * dst[i].y
      ]);
    }
    const b = [];
    for (let i = 0; i < 4; i++) {
      b.push(dst[i].x);
      b.push(dst[i].y);
    }
    const h = numeric.solve(A, b);
    return [
      [h[0], h[1], h[2]],
      [h[3], h[4], h[5]],
      [h[6], h[7], 1]
    ];
  }

  function applyTransform(x, y, matrix) {
    const a = matrix[0][0] * x + matrix[0][1] * y + matrix[0][2];
    const b = matrix[1][0] * x + matrix[1][1] * y + matrix[1][2];
    const c = matrix[2][0] * x + matrix[2][1] * y + matrix[2][2];
    return [a / c, b / c];
  }
});