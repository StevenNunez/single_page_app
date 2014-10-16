$:.unshift('.')
require 'config/environment'
require 'server'

run Server.new
