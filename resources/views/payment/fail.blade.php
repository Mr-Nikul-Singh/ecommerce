<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Failed</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .payment-failed-page {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f9fa;
        }
        .card {
            max-width: 400px;
            width: 100%;
            text-align: center;
        }
        .card img {
            width: 100px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="payment-failed-page">
        <div class="card shadow-sm">
            <div class="card-body">
                <img src="https://cdn-icons-png.flaticon.com/512/565/565340.png" alt="Payment Failed">
                <h3 class="card-title text-danger">Payment Failed</h3>
                <p class="card-text">{{ $request->error }}</p>
                <p class="card-text text-muted">Unfortunately, your payment could not be processed. Please try again or contact support if the issue persists.</p>
            </div>
        </div>
    </div>
</body>
</html>
