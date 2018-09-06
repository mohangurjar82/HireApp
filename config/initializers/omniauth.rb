Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, "8184y1lgxbbcwd", "9SfAW7oKsAS4idVQ", secure_image_url: true
end