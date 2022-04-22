<!DOCTYPE html>
<html>
<body>
    <h1>Setteri-testi</h1>
    <button id="addbtn" type="button" onclick="appendTest()">Lisää vakiot</button> 
    <div id="liveArea"></div>
    <p id="counter"></p>
    <script>
        var cnt=0;
        function appendTest() {
            cnt++;
            if (cnt < 11) {
                document.getElementById("counter").innerHTML = "Lisätty " + cnt + " kappaletta"; 
                let h = document.createElement("h4");
                var t = document.createTextNode("Päivää Porvoo!");
                h.appendChild(t);
                document.getElementById("liveArea").appendChild(h);
            }
            else {
                document.getElementById("addbtn").style.color = "red";
                var btnTxt = document.getElementById("addbtn").innerHTML;
                document.getElementById("addbtn").innerHTML = btnTxt + " FULL";
            }
        }
    </script>
</body>
</html>