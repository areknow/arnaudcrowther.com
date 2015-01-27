<?PHP

if(isset($_POST['submit'])) {
    
    $newpost = filter_var_array($_POST, FILTER_SANITIZE_STRING);
    
    $first = $newpost['first'];
    $last = $newpost['last']; 
    $email = $newpost['email'];
    $message = $newpost['message'];
        
    $to      = 'arnaudcrowther@gmail.com';
    $subject = '[Contact Form] New message from arnaudcrowther.com';
    $message = "Form: $last, $first\r\nEmail: $email\r\nMessage: $message";
    $headers = 'From: contact-form@arnaudcrowther.com' . "\r\n" .
        'Reply-To: ' . "$email\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    mail($to, $subject, $message, $headers);
    
    header ('Location: ../index.html');
    exit;
}
