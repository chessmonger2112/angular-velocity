console.log("sup?");
      var radius1 = 50;
      var xSeperation = 50;
      var disX = 400;
      var disY = 200;
      var radius2 = findRadius(radius1, xSeperation);
      var theta1 = 0;
      var quotient = xSeperation / radius2;
      var theta2 = Math.asin(quotient);

      function createDot(theta, radius)
      {
        var left = findDirection(theta, radius, disX, Math.sin);
        var top = findDirection(theta, radius, disY, Math.cos);
        var style = styleCreater(left, top);
        var element = `<span class='dot' style="${style}">.</span>`;
        $("#container").append(element);
      }

      function styleCreater(left, top)
      {
        return `position: absolute; left: ${left}px; top: ${top}px`;
      }

      function findDirection(angle, radius, displacement, func)
      {
        return radius * func(angle) + displacement;
      }

      function findRadius(x, y)
      {
        var x2 = x * x;
        var y2 = y * y;
        var sum = x2 + y2;
        var d = Math.sqrt(sum);
        return d;
      }

      function intervalFunction()
      {
        createDot(theta1, radius1);
        createDot(theta2, radius2);
        theta1 += .01;
        theta2 += .01;
      }
       setInterval(intervalFunction,
        20);
