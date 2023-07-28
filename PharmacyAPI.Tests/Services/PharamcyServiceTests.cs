using AutoFixture;
using FluentAssertions;
using Moq;
using PharmacyAPI.Models;
using PharmacyAPI.Services;

namespace PharmacyAPI.Tests.Services
{
    public class PharamcyServiceTests
	{

        private readonly Mock<IPharmacyService> _repositoryMock;
        private readonly PharmacyService _serviceMock;
        private readonly IFixture _fixture;

        public PharamcyServiceTests()
        {
            _fixture = new Fixture();
            _repositoryMock = _fixture.Freeze<Mock<IPharmacyService>>();
            //_serviceMock = new PharmacyService(_repositoryMock.Object);
        }

        [Fact]
        public async Task GetAllPharmacies_ShouldReturnListOfAllPharmacies_WhenPharmaciesFound()
        {
            var pharmacyListMock = _fixture.Create<List<Pharmacy>>();
            _repositoryMock.Setup(x => x.GetAllPharmacies()).ReturnsAsync(pharmacyListMock);

            var result = await _serviceMock.GetAllPharmacies();

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<List<Pharmacy>>();
        }

        [Fact]
        public async Task GetAllPharmacies_ShouldReturnEmptyList_WhenNoPharmaciesFound()
        {
            _fixture.OmitAutoProperties = true;
            var pharmacyListMock = new List<Pharmacy>();
            _repositoryMock.Setup(x => x.GetAllPharmacies()).ReturnsAsync(pharmacyListMock);
            var result = await _serviceMock.GetAllPharmacies();
      
            result.Should().BeAssignableTo<List<Pharmacy>>();
            result.Should().BeEmpty();
        }

        [Fact]
        public async Task GetPharmacyById_ShouldReturnSinglePharmacy_WhenIdIsFound()
        {
            var pharmacyMock = _fixture.Create<Pharmacy>();
            var id = _fixture.Create<int>();
            _repositoryMock.Setup(x => x.GetPharmacyById(id)).ReturnsAsync(pharmacyMock);

            var result = await _serviceMock.GetPharmacyById(id);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<Pharmacy>();
        }

        [Fact]
        public async Task GetPharmacyById_ShouldReturnNull_WhenIdIsNotFound()
        {
            Pharmacy? pharmacyMock = null;
            var id = _fixture.Create<int>();
            _repositoryMock.Setup(x => x.GetPharmacyById(id)).ReturnsAsync(pharmacyMock);

            var result = await _serviceMock.GetPharmacyById(id);

            result.Should().BeNull();
        }

        [Fact]
        public async Task UpdatePharmacyById_ShouldReturnUpdatedPharmacy_WhenInputIsValidAndExistingPharmacyIsFound()
        {
            var pharmacyMock = _fixture.Create<Pharmacy>();
            var id = _fixture.Create<int>();
            _repositoryMock.Setup(x => x.UpdatePharmacyById(id, pharmacyMock)).ReturnsAsync(pharmacyMock);

            var result = await _serviceMock.UpdatePharmacyById(id, pharmacyMock);

            result.Should().NotBeNull();
            result.Should().BeAssignableTo<Pharmacy>();
            result.Should().BeEquivalentTo(pharmacyMock);
        }

        [Fact]
        public async Task UpdatePharmacyById_ShouldReturnNull_WhenNoExistingPharmacyIsFound()
        {
            Pharmacy? nullPharmacyMock = null;
            var pharmacyMock = _fixture.Create<Pharmacy>();
            var id = _fixture.Create<int>();
            _repositoryMock.Setup(x => x.UpdatePharmacyById(id, pharmacyMock)).ReturnsAsync(nullPharmacyMock);

            var result = await _serviceMock.UpdatePharmacyById(id, pharmacyMock);

            result.Should().BeNull();
        }
    }
}

