from setuptools import setup
from setuptools.command.build import build

class BuildCommand(build):
    def initialize_options(self): 
         build.initialize_options(self)
    self.build_base = '/tmp'


setup(
    name='cb_django_fleet_equipment_management',
    version='0.1',
    packages=['equipment_management'],
    install_requires=[],
    cmdclass={'build': BuildCommand},
)