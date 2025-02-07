#BAD not single use class..
class Robot:
  def settings(self):
    print("Updating Robot settings..")
  def auth(self):
    print("Robot authorization in progress")
 #Usage
robotone = Robot()
robotone.auth()
robotone.settings()