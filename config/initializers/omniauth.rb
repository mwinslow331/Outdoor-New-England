OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '158054880571-3od420s5tfrf8nsfp784ar5kr777es70.apps.googleusercontent.com', 'eDxQqRlO_PBgYEKs-AY-QeMG', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
