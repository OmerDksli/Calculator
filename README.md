<img src="https://github.com/OmerDksli/Calculator/blob/main/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1.PNG" />
<!DOCTYPE html>             
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
     
        <title>hesap makinesi</title>
    </head>
    <body>
       
        <div class="calculator">
            <table>
                <form name="hesap">
                    <fieldset style="text-align: center">
               
               <div><legend style="font-size: xx-large;">Manuel Css Hesap Makinesi</legend></div>         
                <tr>
                    <td colspan="4"id="asd">
                        <input type="text" 
                        id="window" 
                        name="ekran"
                        placeholder="lütfen sayıları yazınız" readonly="true">

                    </td>
                    
                </tr>
                <tr>    
                    <td><input class="dugme" type="button" value="1"></td>
                    <td><input class="dugme" type="button" value="2"></td>
                    <td><input class="dugme" type="button" value="3"></td>
                    <td><input class="dugme" type="button" value="+"></td>
                </tr>
                <tr>    
                    <td><input class="dugme" type="button"  value="4"></td>
                    <td><input class="dugme" type="button" value="5"></td>
                    <td><input class="dugme" type="button" value="6"></td>
                    <td><input class="dugme" type="button" value="-"></td>
                </tr>
                <tr>    
                    <td><input class="dugme" type="button" value="7"></td>
                    <td><input class="dugme" type="button" value="8"></td>
                    <td><input class="dugme" type="button" value="9"></td>
                    <td><input class="dugme" type="button" value="*"></td>
                </tr>
                <tr>    
                    <td><input class="dugme" type="button" value="."></td>
                    <td><input class="dugme" type="button" value="0"></td>
                    <td><input class="dugme" type="button" value="/"></td>
                    <td><input class="dugme" type="button" value="="></td>
                </tr>
                <tr>    
                    <td><input class="dugme" type="button" value="AC"></td>
                    <td><input class="dugme" type="button" value="C"></td>
                    <td><input class="dugme" type="button" value="("></td>
                    <td><input class="dugme" type="button" value=")"></td>
                </tr>
            </table>
        
        
            </fieldset>
        </form>

        </div>

        <script src="script.js"></script>
    </body>
 
 </html>
