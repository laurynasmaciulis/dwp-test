import Accordion from '../src/Accordion';

describe('Accordion component', function() {
  beforeEach(function() {
    const fixture = `
      <div class="accordion">
        <a href="#">Test</a>
        <div id="accordion-content">Content</div>
      </div>`

    document.querySelector('body').innerHTML += fixture;
  });

  afterEach(function() {
    const element = document.querySelector('.accordion');
    element.parentNode.removeChild(element);
  });

  it('should collapse accordion on page load', function() {
    const accordion = new Accordion({elementSelector: '.accordion'});
    const accordionHeader = document.querySelector('.accordion a');
    const accordionContent = document.querySelector('.accordion div');

    expect(accordionHeader.classList.contains('collapsed')).withContext('should have collapsed class on anchor').toBeTrue();
    expect(accordionHeader.classList.contains('expanded')).withContext('should not have expanded class on anchor').toBeFalse();
    expect(accordionHeader.getAttribute('aria-expanded')).withContext('should set aria-expanded attribute to true').toEqual('false');
    expect(accordionContent.classList.contains('hidden')).withContext('should have hidden class on content').toBeTrue();
    expect(accordionContent.getAttribute('aria-hidden')).withContext('should set aria-hidden attribute to true').toEqual('true');
  });

  it('should collapse accordion when accordion is expanded and accordion header is clicked', function() {
    const accordion = new Accordion({elementSelector: '.accordion'});
    const accordionHeader = document.querySelector('.accordion a');
    const accordionContent = document.querySelector('.accordion div');

    expect(accordionHeader.classList.contains('collapsed')).withContext('should have collapsed class on anchor').toBeTrue();
    expect(accordionHeader.classList.contains('expanded')).withContext('should not have expanded class on anchor').toBeFalse();
    expect(accordionHeader.getAttribute('aria-expanded')).withContext('should set aria-expanded attribute to false').toEqual('false');
    expect(accordionContent.classList.contains('hidden')).withContext('should have hidden class on content').toBeTrue();
    expect(accordionContent.getAttribute('aria-hidden')).withContext('should set aria-hidden attribute to true').toEqual('true');

    accordionHeader.click();

    expect(accordionHeader.classList.contains('collapsed')).withContext('should not have collapsed class on anchor').toBeFalse();
    expect(accordionHeader.classList.contains('expanded')).withContext('should have expanded class on anchor').toBeTrue();
    expect(accordionHeader.getAttribute('aria-expanded')).withContext('should set aria-expanded attribute to true').toEqual('true');
    expect(accordionContent.classList.contains('hidden')).withContext('should not have hidden class on content').toBeFalse();
    expect(accordionContent.getAttribute('aria-hidden')).withContext('should set aria-hidden attribute to false').toEqual('false');
  });

  it('should expand accordion when accordion is collapsed and accordion header is clicked', function() {
    const accordion = new Accordion({elementSelector: '.accordion'});
    const accordionHeader = document.querySelector('.accordion a');
    const accordionContent = document.querySelector('.accordion div');

    accordionHeader.click();

    expect(accordionHeader.classList.contains('collapsed')).withContext('should not have collapsed class on anchor').toBeFalse();
    expect(accordionHeader.classList.contains('expanded')).withContext('should have expanded class on anchor').toBeTrue();
    expect(accordionHeader.getAttribute('aria-expanded')).withContext('should set aria-expanded attribute to true').toEqual('true');
    expect(accordionContent.classList.contains('hidden')).withContext('should not have hidden class on content').toBeFalse();
    expect(accordionContent.getAttribute('aria-hidden')).withContext('should set aria-hidden attribute to false').toEqual('false');

    accordionHeader.click();

    expect(accordionHeader.classList.contains('collapsed')).withContext('should have collapsed class on anchor').toBeTrue();
    expect(accordionHeader.classList.contains('expanded')).withContext('should not have expanded class on anchor').toBeFalse();
    expect(accordionHeader.getAttribute('aria-expanded')).withContext('should set aria-expanded attribute to false').toEqual('false');
    expect(accordionContent.classList.contains('hidden')).withContext('should have hidden class on content').toBeTrue();
    expect(accordionContent.getAttribute('aria-hidden')).withContext('should set aria-hidden attribute to true').toEqual('true');
  });
});
